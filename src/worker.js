const raw_parser = require('./modules/raw_parser.mod.js')

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

    raw_parser.parse(message_json[raw_message])

  },
};
