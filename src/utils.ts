import { PluginInstallation } from "@amplication/code-gen-types";
import { name as PackageName } from "../package.json"
import { Settings } from './types'
import defaultSettings from "../.amplicationrc.json";

export const getPluginSettings = (
    pluginInstallations: PluginInstallation[]
  ): Settings => {  
    const plugin = pluginInstallations.find((plugin) => plugin.npm === PackageName);

    const userSettings = plugin?.settings ?? {};

    const settings : Settings = {
        ...defaultSettings,
        ...userSettings  
    }
 
    return settings;
  }
