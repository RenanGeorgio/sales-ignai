declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_URL?: string;
        }
    }
}

declare module '@osam2/react-calendar' {
    function Calendar(): any
    export Calendar;
}

declare module '.svg' {
    export const content: any;
};

declare module '.css' {
    export const content: any;
};

declare module '.mp4' {
    export const content: any;
};

declare module '.png' {
    export const content: any;
};

declare module '.mjs' {
    export const content: any;
}

declare module '.dat' {
    export const content: any;
}

declare module '*.hiro' {
    export const content: any;
}
