import { z } from 'zod';
import { baseBDDP_Schema, baseBUDP_Schema } from '../BasicDataPacket.js';
import { LoraInfo } from '../LoraInfo.js';

// BDDP Outlet.getState
export type bDDP_Outlet_getState = z.infer<typeof baseBDDP_Schema>;

// BUDP Outlet.getState
const bUDP_Outlet_getState_Schema = baseBUDP_Schema.extend({
    data: z.object({
        state: z.enum(['open', 'closed']),
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

export type bUDP_Outlet_getState = z.infer<typeof bUDP_Outlet_getState_Schema>;

// BDDP Outlet.setState
const bDDP_Outlet_setState_Schema = baseBDDP_Schema.extend({
    params: z.object({
        state: z.enum(['open', 'closed']),
    }),
});
export type bDDP_Outlet_setState = z.infer<typeof bDDP_Outlet_setState_Schema>;

// BUDP Outlet.setState
const bUDP_Outlet_setState_Schema = baseBUDP_Schema.extend({
    data: z.object({
        state: z.enum(['open', 'closed']),
    }),
});
export type bUDP_Outlet_setState = z.infer<typeof bUDP_Outlet_setState_Schema>;

// BDDP Outlet.setDelay
const bDDP_Outlet_setDelay_Schema = baseBDDP_Schema.extend({
    data: z.object({
        delay: z.object({
            on: z.number(),
            off: z.number(),
        }),
    }),
});

export type bDDP_Outlet_setDelay = z.infer<typeof bDDP_Outlet_setDelay_Schema>;

// BUDP Outlet.setDelay
const bUDP_Outlet_setDelay_Schema = baseBUDP_Schema.extend({
    params: z.object({
        delayOn: z.number().optional(),
        delayOff: z.number().optional(),
    }),
});

export type bUDP_Outlet_setDelay = z.infer<typeof bUDP_Outlet_setDelay_Schema>;

// BDDP Outlet.getSchedules
export type bDDP_Outlet_getSchedules = z.infer<typeof baseBDDP_Schema>;

// BUDP Outlet.getSchedules
const bUDP_Outlet_getSchedules_Schema = baseBUDP_Schema.extend({
    data: z
        .record(
            z.number(),
            z.object({
                isValid: z.boolean(),
                index: z.number(),
                on: z.string().optional(),
                off: z.string().optional(),
                week: z.number(),
            })
        )
        .array(),
});

export type bUDP_Outlet_getSchedules = z.infer<
    typeof bUDP_Outlet_getSchedules_Schema
>;

// BDDP Outlet.setSchedules
const bDDP_Outlet_setSchedules_Schema = baseBDDP_Schema.extend({
    params: z.object({
        sches: z.record(
            z.number(),
            z.object({
                isValid: z.boolean(),
                index: z.number(),
                on: z.string().optional(),
                off: z.string().optional(),
                week: z.number(),
            })
        ),
    }),
});

// BUDP Outlet.setSchedules
// Note: Same at getSchedules
export type bUDP_Outlet_setSchedules = z.infer<
    typeof bUDP_Outlet_getSchedules_Schema
>;

// BDDP Outlet.getVersion
export type bDDP_Outlet_getVersion = z.infer<typeof baseBDDP_Schema>;

// BUDP Outlet.getVersion
const bUDP_Outlet_getVerion_Schema = baseBUDP_Schema.extend({
    data: z.object({
        version: z.string(),
        newVersion: z.object({
            versionId: z.string().optional(),
            versionCode: z.string().optional(),
            fileSize: z.string().optional(),
        }),
    }),
});

// BDDP Outlet.startUpgrade
const bDDP_Outlet_startUpgrade_Schema = baseBDDP_Schema.extend({
    params: z.object({
        versionId: z.string(),
    }),
});

export type bDDP_Outlet_startUpgrade = z.infer<
    typeof bDDP_Outlet_startUpgrade_Schema
>;

// BUDP Outlet.startUpgrade
const bUDP_Outlet_startUpgrade_Schema = baseBUDP_Schema.extend({
    data: z.object({
        isStarted: z.boolean(),
    }),
});