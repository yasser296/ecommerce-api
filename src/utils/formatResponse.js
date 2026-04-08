const { create } = require('xmlbuilder2');

function buildXmlNode(node, value) {
  if (Array.isArray(value)) {
    for (const item of value) {
      const child = node.ele('item');

      if (item !== null && typeof item === 'object') {
        buildXmlNode(child, item);
      } else {
        child.txt(String(item));
      }
    }
    return;
  }

  if (value !== null && typeof value === 'object') {
    for (const [key, childValue] of Object.entries(value)) {
      const child = node.ele(key);
      buildXmlNode(child, childValue);
    }
    return;
  }

  if (value !== undefined && value !== null) {
    node.txt(String(value));
  }
}

function toXml(rootName, data) {
  const doc = create({ version: '1.0' });
  const root = doc.ele(rootName);

  buildXmlNode(root, data);

  return doc.end({ prettyPrint: true });
}

function sendFormattedResponse(req, res, payload, rootName = 'response') {
  const accepted = req.accepts(['application/json', 'application/xml']);

  if (!accepted) {
    return res.status(406).json({
      message: 'BODY_NOT_VALID',
      details: 'Supported response formats are application/json and application/xml'
    });
  }

  if (accepted === 'application/xml') {
    res.type('application/xml');
    return res.send(toXml(rootName, payload));
  }

  res.type('application/json');
  return res.json(payload);
}

module.exports = {
  sendFormattedResponse
};