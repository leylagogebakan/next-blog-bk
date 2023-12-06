
export async function getJwtToken() {
    const res = await fetch("/api/v1/auth");
    const token = await res.json();
    if (!token) {
      return null;
    }
    return token.token;
}
