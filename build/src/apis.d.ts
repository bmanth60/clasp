/**
 * Google API Types
 */
/**
 * Different types of starter script templates.
 * Technically, a script can be multiple types (e.g. Slides add-on/API),
 * but it's pretty rare that anyone wants that.
 */
export declare enum SCRIPT_TYPES {
    STANDALONE = "standalone",
    DOCS = "docs",
    SHEETS = "sheets",
    SLIDES = "slides",
    FORMS = "forms",
    WEBAPP = "webapp",
    API = "api"
}
export interface AdvancedService {
    readonly userSymbol: string;
    readonly serviceId: string;
    readonly version: string;
}
/**
 * This is a list of all public Advanced Services.
 *
 * It was generated by:
 * 1. script.google.com/create
 * 1. Resources > Advanced Google Services
 * 1. Enable all services
 * 1. View > Show manifest file
 * 1. View appsscript.json
 */
export declare const PUBLIC_ADVANCED_SERVICES: AdvancedService[];
export declare const SCRIPT_ID_LENGTH = 57;
