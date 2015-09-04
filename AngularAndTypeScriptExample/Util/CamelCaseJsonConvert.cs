using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AngularAndTypeScriptExample.Util
{
    public static class CamelCaseJsonConvert
    {
        public static string SerializeObject(object value)
        {
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };
            return JsonConvert.SerializeObject(value, settings);
        }
    }
}