/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const AgentDefaultSettings: core.serialization.ObjectSchema<serializers.AgentDefaultSettings.Raw, JulepApi.AgentDefaultSettings>;
export declare namespace AgentDefaultSettings {
    interface Raw {
        frequency_penalty?: number | null;
        length_penalty?: number | null;
        presence_penalty?: number | null;
        repetition_penalty?: number | null;
        temperature?: number | null;
        top_p?: number | null;
    }
}