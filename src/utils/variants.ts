import { classMerge } from "./classMerge";

export function createVariants<T extends Record<string, Record<string, string>>>(
  base: string,
  variants: T
) {
  return (config: { [K in keyof T]?: keyof T[K] } & { class?: string }) => {
    const variantClasses = Object.entries(config)
      .map(([key, value]) => {
        if (key === "class") return "";
        return variants[key]?.[value as string] || "";
      })
      .filter(Boolean);

    return classMerge(base, ...variantClasses, config.class);
  };
}
