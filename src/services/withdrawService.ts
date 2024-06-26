export function calculateBills(value: number): Record<string, number> {
    const availableBallots = [100, 50, 20, 10, 5, 2];
    const result:  Record<string, number> = {}

    let remainingValue = value;

    for(const ballot of availableBallots) {
        const amountBallot = Math.floor(remainingValue / ballot)
        
        if(amountBallot > 0) {
            result[ballot.toString()] = amountBallot;
            remainingValue -= amountBallot * ballot
        }
    }
    return result
}