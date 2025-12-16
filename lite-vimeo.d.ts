export declare class LiteVimeoEmbed extends HTMLElement {
    shadowRoot: ShadowRoot;
    private iframeLoaded;
    private domRefFrame;
    private domRefImg;
    private domRefPlayButton;
    constructor();
    static get observedAttributes(): string[];
    connectedCallback(): void;
    get videoId(): string;
    set videoId(id: string);
    get videoTitle(): string;
    set videoTitle(title: string);
    get videoPlay(): string;
    set videoPlay(name: string);
    get videoStartAt(): string;
    set videoStartAt(time: string);
    get videoHash(): string;
    set videoHash(hash: string);
    get autoLoad(): boolean;
    set autoLoad(value: boolean);
    get autoPlay(): boolean;
    set autoPlay(value: boolean);
    private setupDom;
    private setupComponent;
    attributeChangedCallback(name: string, oldVal: unknown, newVal: unknown): void;
    private addIframe;
    private initImagePlaceholder;
    private initIntersectionObserver;
    private static preconnected;
    private static addPrefetch;
    private static warmConnections;
}
declare global {
    interface HTMLElementTagNameMap {
        'lite-vimeo': LiteVimeoEmbed;
    }
}
