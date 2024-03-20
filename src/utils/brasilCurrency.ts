export function formatToBRL(value: number): string {
    const roundedValue = value.toFixed(2);
    return Number(roundedValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}