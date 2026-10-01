const STORAGE_PREFIX = "impacto-social-";

export function saveData(key, data) {
  localStorage.setItem(
    `${STORAGE_PREFIX}${key}`,
    JSON.stringify(data)
  );
}

export function getData(key, defaultValue = null) {
  const data = localStorage.getItem(`${STORAGE_PREFIX}${key}`);

  if (!data) {
    return defaultValue;
  }

  try {
    return JSON.parse(data);
  } catch {
    return defaultValue;
  }
}

export function removeData(key) {
  localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
}