const express = require("express");
const { getSDPeItemTargetResult } = require("../services/peItemTargetResult");

const router = express.Router();

router.post("/target-result", async (req, res) => {
  try {
    const { pe_id } = req.body;

    if (!pe_id) {
      return res.status(400).json({
        code: 400,
        msg: "pe_id is required",
      });
    }

    const data = await getSDPeItemTargetResult(pe_id);
    return res.json(data);
  } catch (err) {
    const status = err?.response?.status || 500;
    const detail = err?.response?.data || err?.message || "unknown error";

    return res.status(status).json({
      code: status,
      msg: "调用第三方接口失败",
      detail,
    });
  }
});

module.exports = router;
