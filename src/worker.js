const raw_parser = require('./module/raw_parser.module')

export default {
  async fetch(request, env, ctx) {
    let message_json;

    if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        message_json = JSON.parse(body);
      });
    }

  },
};
