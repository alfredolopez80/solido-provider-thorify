import { IMethodOrEventCall, EventFilter, ThorifyLog, SolidoProviderType } from '@decent-bet/solido';
import { ThorifySettings } from './ThorifySettings';
import { SolidoProvider } from '@decent-bet/solido';
import { SolidoContract, SolidoSigner } from '@decent-bet/solido';
export declare class ThorifyPlugin extends SolidoProvider implements SolidoContract {
    private thor;
    chainTag: string;
    private instance;
    defaultAccount: string;
    address: string;
    private privateKey;
    readonly from: string;
    getProviderType(): SolidoProviderType;
    onReady<T>(settings: T & ThorifySettings): void;
    prepareSigning(methodCall: any, options: IMethodOrEventCall, args: any[]): Promise<SolidoSigner>;
    getAbiMethod(name: string): object;
    callMethod(name: string, args: any[]): any;
    getMethod(name: string): any;
    getEvent(name: string): any;
    getEvents<P, T>(name: string, eventFilter?: EventFilter<T & any>): Promise<(P & ThorifyLog)[]>;
}
