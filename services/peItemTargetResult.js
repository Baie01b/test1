const axios = require("axios");
const config = require("../config");

async function getSDPeItemTargetResult(pe_id) {
  const url =
    config.thirdParty.baseURL +
    "/api/chss/PeExamineByDept/GetSDPeItemTargetResult";

  const body = {
    type: "GetSDPeItemTargetResult",
    category: "C",
    pe_id: String(pe_id),
  };

  const resp = await axios.post(url, body, {
    headers: {
      Authorization: config.thirdParty.token,
      "Content-Type": "application/json",
    },
    timeout: 15000,
  });

  return resp.data;
}

module.exports = {
  getSDPeItemTargetResult,
};
