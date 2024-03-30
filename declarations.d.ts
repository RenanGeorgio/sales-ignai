declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_URL?: string;
        }
    }
}

declare module '@osam2/react-calendar' {
    export function Calendar(): any
}

declare module '*.scss' {
    const content: any;
    export default content;
};

declare module '*.module.scss' {
    const content: any;
    export default content;
};

declare module '*.module.css' {
    const content: any;
    export default content;
};

declare module '*.css' {
    const content: any;
    export default content;
};

declare module '*.png' {
    export const content: any;
};

declare module '*.mjs' {
    export const content: any;
}

declare module '*.svg' {
    export const content: any;
};