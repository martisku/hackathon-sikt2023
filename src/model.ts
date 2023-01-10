export type FagId = string & {tag?: "FagId"}
const FagId = (str: String): FagId => str as any

export type Interesse = string & {tag?: "Interesse"}
const Interesse = (str: String): Interesse => str as any

// extractes fra uio.no
export interface Fag {
    id: FagId
    "Kort om emnet": string
    "Hva lærer du?": string,
    "Obligatoriske forkunnskaper": readonly FagId[]
}

type Interesser = Map<Fag, readonly Interesse[]>;

