const typeCache: { [label: string]: boolean } = {};

export function type<T>(label: T | ''): T {
    if (typeCache[<string>label]) {
        throw Error(`Action type '${label}' is no unique`);
    }

    typeCache[<string>label] = true;

    return <T>label;
}
