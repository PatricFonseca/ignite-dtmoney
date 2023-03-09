import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
	PriceHighLight,
	TransactionContainer,
	TransactionTable,
} from "./styles";

export function Transaction() {
	return (
		<>
			<Header />
			<Summary />

			<TransactionContainer>
				<SearchForm />
				<TransactionTable>
					<tbody>
						<tr>
							<td width="50%">Desenvolvimento de site</td>
							<td>
								<PriceHighLight variant="income">R$ 12000,00</PriceHighLight>
							</td>
							<td>Venda</td>
							<td>12/03/2022</td>
						</tr>

						<tr>
							<td width="50%">Hamburguer</td>
							<td>
								<PriceHighLight variant="outcome">- R$ 30,00</PriceHighLight>
							</td>
							<td>Alimentação</td>
							<td>12/03/2022</td>
						</tr>
					</tbody>
				</TransactionTable>
			</TransactionContainer>
		</>
	);
}
