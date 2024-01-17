/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const ChatSettings: core.serialization.ObjectSchema<serializers.ChatSettings.Raw, JulepApi.ChatSettings>;
export declare namespace ChatSettings {
    interface Raw {
        frequency_penalty?: number | null;
        length_penalty?: number | null;
        logit_bias?: Record<string, number | null | undefined> | null;
        max_tokens?: number | null;
        presence_penalty?: number | null;
        repetition_penalty?: number | null;
        response_format?: serializers.ChatSettingsResponseFormat.Raw | null;
        seed?: number | null;
        stop?: serializers.ChatSettingsStop.Raw | null;
        stream?: boolean | null;
        temperature?: number | null;
        top_p?: number | null;
    }
}