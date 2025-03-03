export function getCsrfToken(): string | null {
    // Get CSRF token from the cookie
    const csrfCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrf_token='));

    if (csrfCookie) {
      return csrfCookie.split('=')[1];
    }

    return null;
  }
