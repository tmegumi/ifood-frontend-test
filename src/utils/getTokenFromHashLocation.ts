interface Token {
  accessToken: string;
  type: string;
  expiresIn: number;
}

export default function getTokenFromHashLocation(hash: string): Token {
  const pieces = hash.split('&');
  const data = {} as Record<string, string>;

  pieces.forEach(piece => {
    const parts = piece.split('=');

    if (parts.length < 2) {
      parts.push('');
    }

    const name = decodeURIComponent(parts[0]);
    const value = decodeURIComponent(parts[1]);

    data[name] = value;
  });

  return {
    accessToken: data['#access_token'],
    type: data.token_type,
    expiresIn: Number(data.expires_in),
  };
}
