import { IAi, ICommonParams, IHeaders } from '@mmstudio/an000002';

export default interface IAiNodejsPage extends IAi {
	readonly data: {
		readonly [attr: string]: unknown;
		readonly msg: ICommonParams;
		readonly headers: IHeaders;
		readonly actionid: string;
		readonly params: { [key: string]: string };
		readonly url: string;
	};
	// eslint-disable-next-line semi
}
