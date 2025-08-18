export interface TrustedTypePolicyFactory {
    getPolicy?(name: string): TrustedTypePolicy | undefined;
    createPolicy?(name: string, options: TrustedTypePolicyOptions): TrustedTypePolicy;
}

declare global {
    interface Window {
        trustedTypes?: TrustedTypePolicyFactory;
        createPolicy?(name: string, options: TrustedTypePolicyOptions): TrustedTypePolicy | string;
    }
}