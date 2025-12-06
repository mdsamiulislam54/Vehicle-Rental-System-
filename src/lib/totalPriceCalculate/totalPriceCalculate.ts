
export const TotalPriceCalculate = (start_date: any, end_date: any, price: number) => {
    const start = new Date(start_date);
    const end = new Date(end_date);

    const diffTime = end.getTime() - start.getTime();

    const day = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const total_price = day * price;

    return total_price


}