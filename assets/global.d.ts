export {};

declare global {
  interface Shopify {
    country: string;
    currency: {
      active: string;
      rate: string;
    };
    designMode: boolean;
    locale: string;
    shop: string;
    loadFeatures(features: ShopifyFeature[], callback?: LoadCallback): void;
    ModelViewerUI?: ModelViewer;
    visualPreviewMode: boolean;
  }

  interface Theme {
    translations: Record<string, string>;
    routes: {
      cart_add_url: string;
      cart_change_url: string;
      cart_update_url: string;
      cart_url: string;
      predictive_search_url: string;
      search_url: string;
    };
    utilities: {
      scheduler: {
        schedule: (task: () => void) => void;
      };
    };
    template: {
      name: string;
    };
  }

  interface Window {
    Shopify: Shopify;
  }

  declare const Shopify: Shopify;
  declare const Theme: Theme;

  type LoadCallback = (error: Error | undefined) => void;

  interface ShopifyFeature {
    name: string;
    version: string;
    onLoad?: LoadCallback;
  }

  interface ModelViewer {
    new (
      element: Element,
      options?: {
        focusOnPlay?: boolean;
      }
    ): ModelViewer;
    play(): void;
    pause(): void;
    toggleFullscreen(): void;
    zoom(amount: number): void;
    destroy(): void;
  }

  interface Navigator {
    readonly deviceMemory?: number;
  }
}
