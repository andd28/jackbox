export default function handler(req, res) {
  const { host } = req.headers;

  if (host === "ecast.jackboxgames.com" || host === "blobcast.jackboxgames.com") {
    res.redirect(301, "https://ecast-qa.jackboxgames.com");
  } else {
    res.status(403).send("Domain not allowed");
  }
}
