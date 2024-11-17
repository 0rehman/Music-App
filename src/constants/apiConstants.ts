export const baseUrl: string = "https://api.spotify.com/v1";

export const fetchToken = async () => {
  const clientId = "7e5851b658fa4d2da18012883ceb8c4d";
  const clientSecret = "1f2fe6a3ec2747b7b23de7d1cedb378b";
  const credentials = btoa(`${clientId}:${clientSecret}`);

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
      body: "grant_type=client_credentials",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const tokenData = await response.json();
    return tokenData?.access_token;
  } catch (e: any) {
    console.error("Error fetching token:", e?.message);
  }
};
