import { readFileSync } from "fs";
import { XmlDocument, XsdValidator } from "libxml2-wasm";
import { xmlRegisterFsInputProviders } from "libxml2-wasm/lib/nodejs.mjs";
xmlRegisterFsInputProviders();

const schema = readFileSync('./schema/dvbi_v7.0-with-hls-hbbtv.xsd', { encoding: "utf-8" });

const document1 = readFileSync('./ospTest.xml', { encoding: "utf-8" });

const validator = XsdValidator.fromDoc(XmlDocument.fromString(schema, {url: "./schema/dvbi_v7.0-with-hls-hbbtv.xsd"}));

try {
	const res = validator.validate(XmlDocument.fromString(document1));
}
catch (err) {
	console.dir(err)
}