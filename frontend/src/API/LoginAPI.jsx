// Fonction pour se connecter
export async function loginUser(email, password) {
  try {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Erreur de connexion');
    }

    const data = await response.json();
    return data; // token, user, etc.
  } catch (error) {
    console.error('Erreur login:', error);
    throw error;
  }
}
