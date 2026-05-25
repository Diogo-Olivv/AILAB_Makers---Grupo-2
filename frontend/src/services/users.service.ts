import type { RegisterDto, RegisterResponse } from '@/dto/users.dto';

export type { RegisterDto, RegisterResponse };

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api';

export async function registerUser(dto: RegisterDto): Promise<RegisterResponse> {
  const res = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message ?? 'Erro ao cadastrar. Tente novamente.');
  }

  return res.json();
}
