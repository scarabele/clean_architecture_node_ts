import GetOrderOutput from "../../application/usecase/get-order/GetOrderOutput";
import GetOrders from "../../application/usecase/get-orders/GetOrders";
import PlaceOrder from "../../application/usecase/place-order/PlaceOrder";
import PlaceOrderInput from "../../application/usecase/place-order/PlaceOrderInput";
import PlaceOrderOutput from "../../application/usecase/place-order/PlaceOrderOutput";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";

export default class OrdersController {

	constructor (readonly repositoryFactory: RepositoryFactory) {
	}

	async getOrders () : Promise<GetOrderOutput[]> {
		const getOrders = new GetOrders(this.repositoryFactory);
		const output = await getOrders.execute();
		return output;
	}

	async placeOrder (input: PlaceOrderInput): Promise<PlaceOrderOutput> {
		const placeOrder = new PlaceOrder(this.repositoryFactory);
		input.issueDate = (input.issueDate) ? new Date(input.issueDate) : new Date();
		const output = await placeOrder.execute(input);
		return output;
	}
}
