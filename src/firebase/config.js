import configs from "./configs.json";
import { includes } from "lodash";

const hostName = window.location.hostname;

const hostsProduction = ["publicidadgoogle.site"];

const currentEnvironment = includes(hostsProduction, hostName)
  ? "production"
  : "development";

const currentConfig = configs[currentEnvironment];

const common = configs.common;
const contactData = configs.common.contactData;

const { version, apiUrl } = currentConfig;

export { version, apiUrl, currentConfig, common, contactData };
