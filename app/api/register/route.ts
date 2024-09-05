import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);
}
