import { hours } from '../data'
import { TrashIcon } from '@heroicons/react/solid'

export default function CookieStandTable({ stands, onDelete }) {

    return (
        <Table>
            <thead>
                <tr className="text-left bg-green-300 ">

                    <TH>Location</TH>
                    {hours.map(slot => (
                        <TH key={slot}>{slot}</TH>
                    ))}
                    <TH>Totals</TH>
                </tr >
            </thead>
            <tbody className="bg-green-200">
                {stands.map((stand, i) => {

                    return (
                        <tr key={stand.id}>

                            <TH>
                                <div className="flex">

                                    <p className="table-cell w-full md:inline-flex">{stand.location}</p>

                                    <span onClick={() => onDelete(stand)}> <TrashIcon className="w-3 h-3 text-red-500"/></span>
                                </div>
                            </TH>

                            {stand.cookiesEachHour.map((amt, i) => (
                                <TD key={i}>
                                    {amt}
                                </TD>
                            ))}
                            <TD>{stand.totalDailyCookies}</TD>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot >
                <tr className="text-sm text-left bg-green-300">
                    <TH>Totals</TH>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0);
                        return <TD key={'amt' + i}>{amt}</TD>
                    })}
                    <TD>{stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</TD>
                </tr>
            </tfoot>
        </Table>

    );
}

function Table({ children }) {
    return (
        <table>
            {children}
        </table>
    );
}
function TH({ children }) {
    return (
        <th className="w-1/12 p-1 text-xs border border-gray-700">{children}</th>
    )
}

function TD({ children }) {
    return (
        <td className="p-1 text-xs border border-gray-700 ">{children}</td>
    )
}