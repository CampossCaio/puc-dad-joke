export type User = {
  id: string;
  name: string;
  token: string;
};

export type SignInParams = {
  email: string;
  password: string;
};

class FakeAuthService {
  async signin({ email, password }: SignInParams): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "puc@gmail.com" && password === "123456") {
          resolve({
            id: "1",
            name: "Puc Minas",
            token: "fake-api-token",
          });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  }
}

export default new FakeAuthService();
