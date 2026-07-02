const COOKIE_PREFIX = "sand_research_tracker_state";
const CHUNK_SIZE = 3400;
const MAX_CHUNKS = 18;
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export type CookieSaveResult = {
  ok: boolean;
  bytes: number;
  chunks: number;
  error?: string;
};

function readCookie(name: string): string | undefined {
  const prefix = `${name}=`;
  return document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix))
    ?.slice(prefix.length);
}

function writeCookie(name: string, value: string, maxAge = MAX_AGE_SECONDS) {
  document.cookie = `${name}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

function deleteCookie(name: string) {
  writeCookie(name, "", 0);
}

export function loadStateFromCookie<T>(fallback: T): T {
  const chunkCountRaw = readCookie(`${COOKIE_PREFIX}_chunks`);
  const chunkCount = chunkCountRaw ? Number.parseInt(chunkCountRaw, 10) : 0;

  let encoded = "";
  if (chunkCount > 0) {
    for (let i = 0; i < chunkCount; i += 1) {
      encoded += readCookie(`${COOKIE_PREFIX}_${i}`) ?? "";
    }
  } else {
    encoded = readCookie(COOKIE_PREFIX) ?? "";
  }

  if (!encoded) return fallback;

  try {
    return JSON.parse(decodeURIComponent(encoded)) as T;
  } catch {
    return fallback;
  }
}

export function saveStateToCookie(value: unknown): CookieSaveResult {
  const encoded = encodeURIComponent(JSON.stringify(value));
  const chunks = Math.ceil(encoded.length / CHUNK_SIZE);

  if (chunks > MAX_CHUNKS) {
    return {
      ok: false,
      bytes: encoded.length,
      chunks,
      error: `Cookie state is too large: ${chunks} chunks`,
    };
  }

  deleteCookie(COOKIE_PREFIX);
  writeCookie(`${COOKIE_PREFIX}_chunks`, String(chunks));
  for (let i = 0; i < chunks; i += 1) {
    writeCookie(`${COOKIE_PREFIX}_${i}`, encoded.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE));
  }
  for (let i = chunks; i < MAX_CHUNKS; i += 1) {
    deleteCookie(`${COOKIE_PREFIX}_${i}`);
  }

  return {
    ok: true,
    bytes: encoded.length,
    chunks,
  };
}
