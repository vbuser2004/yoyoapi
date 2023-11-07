import { z } from "zod";
import { baseBDDP_Schema, baseBUDP_Schema } from "../BasicDataPacket.js";
import { LoraInfo } from "../LoraInfo.js";
// BDDP Outlet.getState
export const bDDP_Outlet_getState_Schema = baseBDDP_Schema;
// BUDP Outlet.getState
export const bUDP_Outlet_getState_Schema = baseBUDP_Schema.extend({
    data: z.object({
        state: z.enum(["open", "closed"]),
        delay: z.object({
            ch: z.number(),
            on: z.number(),
            off: z.number(),
        }),
        power: z.number().optional(),
        watt: z.number().optional(),
        version: z.string(),
        time: z.string(),
        tz: z.number(),
        loraInfo: LoraInfo,
    }),
});
// BDDP Outlet.setState
export const bDDP_Outlet_setState_Schema = baseBDDP_Schema.extend({
    params: z.object({
        state: z.enum(["open", "close"]),
    }),
});
// BUDP Outlet.setState
export const bUDP_Outlet_setState_Schema = baseBUDP_Schema.extend({
    data: z.object({
        state: z.enum(["open", "closed"]),
    }),
});
// BDDP Outlet.setDelay
export const bDDP_Outlet_setDelay_Schema = baseBDDP_Schema.extend({
    params: z.object({
        delayOn: z.number().optional(),
        delayOff: z.number().optional(),
    }),
});
// BUDP Outlet.setDelay
export const bUDP_Outlet_setDelay_Schema = baseBUDP_Schema.extend({
    data: z.object({
        delay: z.object({
            on: z.number(),
            off: z.number(),
        }),
    }),
});
// BUDP Outlet.getSchedules
export const bUDP_Outlet_getSchedules_Schema = baseBUDP_Schema.extend({
    data: z
        .record(z.string(), z.object({
        isValid: z.boolean(),
        index: z.number(),
        on: z.string().optional(),
        off: z.string().optional(),
        week: z.number(),
    }))
        .array(),
});
// BDDP Outlet.setSchedules
export const bDDP_Outlet_setSchedules_Schema = baseBDDP_Schema.extend({
    params: z.object({
        sches: z
            .record(z.string(), z.object({
            isValid: z.boolean(),
            index: z.number(),
            on: z.string().optional(),
            off: z.string().optional(),
            week: z.number(),
        }))
            .array(),
    }),
});
// Set Schedule Parameter Schema
export const sches_Schema = z
    .object({
    isValid: z.boolean(),
    index: z.number(),
    on: z.string().optional(),
    off: z.string().optional(),
    week: z.number().optional().default(-1),
    weekdays: z
        .enum([
        "All",
        "Weekdays",
        "Weekends",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ])
        .array()
        .optional(),
})
    .array();
// BDDP Outlet.getVersion *** NO LONGER SUPPORTED ***
// export const bDDP_Outlet_getVersion_Schema = baseBDDP_Schema;
// export type bDDP_Outlet_getVersion = z.infer<typeof baseBDDP_Schema>;
// BUDP Outlet.getVersion
// export const bUDP_Outlet_getVersion_Schema = baseBUDP_Schema.extend({
//   data: z.object({
//     version: z.string(),
//     newVersion: z.object({
//       versionId: z.string().optional(),
//       versionCode: z.string().optional(),
//       fileSize: z.string().optional(),
//     }),
//   }),
// });
// export type bUDP_Outlet_getVersion = z.infer<
//   typeof bUDP_Outlet_getVersion_Schema
// >;
// BDDP Outlet.startUpgrade
// export const bDDP_Outlet_startUpgrade_Schema = baseBDDP_Schema.extend({
//   params: z.object({
//     versionId: z.string(),
//   }),
// });
// export type bDDP_Outlet_startUpgrade = z.infer<
//   typeof bDDP_Outlet_startUpgrade_Schema
// >;
// BUDP Outlet.startUpgrade
// export const bUDP_Outlet_startUpgrade_Schema = baseBUDP_Schema.extend({
//   data: z.object({
//     isStarted: z.boolean(),
//   }),
// });
// export type bUDP_Outlet_startUpgrade = z.infer<
//   typeof bUDP_Outlet_getVersion_Schema
// >;
//# sourceMappingURL=Outlet.js.map