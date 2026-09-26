const API_BASE = process.env.REACT_APP_API_BASE || "";

export async function apiClient(endpoint, options = {}) {
  const { method = "GET", headers = {}, body, ...rest } = options;

  const response = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Request failed");
  }

  return response.status === 204 ? null : response.json();
}