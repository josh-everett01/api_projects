class GitHub {
  constructor() {
    this.client_id = '9780de65aa0bb0cb7c68';
    this.client_secret = '2d00cf0ab40a516b98e9ed7c9f381390570f2fc5';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}