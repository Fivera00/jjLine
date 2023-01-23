import CardSales from '../../components/admin/cardSales'
const Sales = (props)=>{
    return(
        <div className="custom-row">
            <CardSales tventa={"Ventas Anuales"} icon={"M3 6V18H13.32C13.1 17.33 13 16.66 13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3M12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61C14.85 10.28 13.59 8.97 12 9M21.63 12.27L17.76 16.17L16.41 14.8L15 16.22L17.75 19L23.03 13.68L21.63 12.27Z"}
            total={"150 Ventas"}>
            </CardSales>
            <CardSales tventa={"Ventas Mensuales"} icon={"M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9M1,10H3V20H19V22H1V10Z"}
            total={"45 Ventas"}>
            </CardSales>
            <CardSales tventa={"Ventas Semanales"} icon={"M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.1 4 20 4M15 10H11V11H14C14.55 11 15 11.45 15 12V15C15 15.55 14.55 16 14 16H13V17H11V16H9V14H13V13H10C9.45 13 9 12.55 9 12V9C9 8.45 9.45 8 10 8H11V7H13V8H15V10Z"}
            total={"15 Ventas"}>
            </CardSales>
        </div>
    )
};
export default Sales;