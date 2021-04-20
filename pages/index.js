import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

function createData(name, type, status, priority, owner, created, due) {
    return { name, type, status, priority, owner, created, due };
}

let rows = [createData('Software', 'Development', 'Assigned', 'High', 'Jason', '6/28/20', '9/8/20'), createData('kades website', 'QA', 'pending', 'Medium', 'Jakob', '2/28/20', '6/2/20'), createData('Design', 'Development', 'Assigned', 'High', 'Jason', '1/28/20', '4/28/20'), createData('Jades website', 'Design', 'pending', 'Low', 'Bob', '4/28/20', '6/5/20'), createData('Jackswebsite', 'Design', 'pending', 'Medium', 'Smith', '3/28/20', '8/8/20'), createData('bobys website', 'coding', 'done', 'done', 'billi', '3/8/20', '8/18/20')];

export default function Home() {
    const [state, setstate] = useState(0);
    const [search, setSearch] = useState('');
    const [row, setRow] = useState([]);
    function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
            const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return order === 'desc' ? comparison * -1 : comparison;
        };
    }
    const s = (x) => {
        rows.sort(compareValues(`${x}`));
        setstate(state + 1);
    };
    const onChange = (e) => {
        setSearch(e.target.value);
    };
    const Search = () => {
        let data = rows.map((rows) => {
            if (rows.name.toUpperCase() === search.toUpperCase()) {
                return rows;
            } else if (rows.owner.toUpperCase() === search.toUpperCase()) {
                return rows;
            }
        });
        setRow(data);
        // for (let i = 0; i < rows.length; i++) {
        //     if (rows[i].name.toUpperCase() === search.toUpperCase()) {
        //         setRow(row.concat(rows[i]));
        //         console.log(row);
        //     } else if (rows[i].owner.toUpperCase() === search.toUpperCase()) {
        //         setRow(row.concat(rows[i]));
        //     }
        // }
        // index = rows.map((row,i) => {
        //     if (row.name === search) {
        //         return i;
        //     }
        // });
        // console.log(index);
        setstate(state + 1);
    };

    return (
        <div className="container mx-auto">
            <div>
                <AppBar position="static" className="bg-black" color="primary">
                    <Toolbar className="flex justify-between">
                        <Typography variant="h6">Jack and Jill enterprise</Typography>
                        <Button variant="contained" color="secondary">
                            Create New
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className="p-[10px] flex justify-between ">
                    <div className=" mt-[8px]">
                        <span className="p-[6px] border-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </span>
                        <span className="p-[6px] border-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline" class="icon icon-tabler icon-tabler-upload" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                <polyline points="7 9 12 4 17 9" />
                                <line x1="12" y1="4" x2="12" y2="16" />
                            </svg>
                        </span>
                    </div>
                    <div className="relative flex">
                        <input type="text" value={search} placeholder="search by owner or project" onChange={onChange} className="border-2 rounded pl-[40px] py-[4px] w-[300px]" />
                        <SearchIcon className="absolute left-0 mt-[7px] ml-[6px]" />
                        <button className="px-[15px] py-[4px] border-2 flex" onClick={Search}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                            </svg>
                            <span>Filter</span>
                        </button>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table className="" size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel onClick={() => s('name')}>Project</TableSortLabel>
                                </TableCell>
                                <TableCell align="right">
                                    <TableSortLabel onClick={() => s('type')}>Type</TableSortLabel>
                                </TableCell>
                                <TableCell align="right">
                                    <TableSortLabel onClick={() => s('status')}>Status</TableSortLabel>
                                </TableCell>
                                <TableCell align="right">
                                    <TableSortLabel onClick={() => s('priority')}>Priority</TableSortLabel>
                                </TableCell>
                                <TableCell align="right">
                                    <TableSortLabel onClick={() => s('owner')}>Owner</TableSortLabel>
                                </TableCell>
                                <TableCell align="right">
                                    <TableSortLabel onClick={() => s('created')}>Created on</TableSortLabel>
                                </TableCell>
                                <TableCell align="right">
                                    <TableSortLabel onClick={() => s('due')}>Due on</TableSortLabel>
                                </TableCell>
                                <TableCell align="right">
                                    <TableSortLabel>Action</TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row.length === 0
                                ? rows.map((row) => (
                                      <TableRow key={row.name}>
                                          <TableCell>
                                              <Checkbox />
                                          </TableCell>
                                          <TableCell component="th" scope="row">
                                              {row.name}
                                          </TableCell>
                                          <TableCell align="right">{row.type}</TableCell>
                                          <TableCell align="right">
                                              <button className={`p-[5px] rounded text-center w-full ${row.status === 'Assigned' ? 'bg-[#BFDBFF]' : 'bg-[#FECACA]'} back`}>{row.status}</button>
                                          </TableCell>
                                          <TableCell align="right">{row.priority}</TableCell>
                                          <TableCell align="right">{row.owner}</TableCell>
                                          <TableCell align="right">{row.created}</TableCell>
                                          <TableCell align="right">{row.due}</TableCell>
                                          <TableCell align="right">
                                              {' '}
                                              <Button variant="contained" color="primery">
                                                  Edit Project
                                              </Button>{' '}
                                          </TableCell>
                                      </TableRow>
                                  ))
                                : row.map((row) =>
                                      row === undefined ? null : (
                                          <TableRow key={row.name}>
                                              <TableCell>
                                                  <Checkbox />
                                              </TableCell>
                                              <TableCell component="th" scope="row">
                                                  {row.name}
                                              </TableCell>
                                              <TableCell align="right">{row.type}</TableCell>
                                              <TableCell align="right">
                                                  <button className={`p-[5px] rounded text-center w-full ${row.status === 'Assigned' ? 'bg-[#BFDBFF]' : 'bg-[#FECACA]'} back`}>{row.status}</button>
                                              </TableCell>
                                              <TableCell align="right">{row.priority}</TableCell>
                                              <TableCell align="right">{row.owner}</TableCell>
                                              <TableCell align="right">{row.created}</TableCell>
                                              <TableCell align="right">{row.due}</TableCell>
                                              <TableCell align="right">
                                                  {' '}
                                                  <Button variant="contained" color="primery">
                                                      Edit Project
                                                  </Button>{' '}
                                              </TableCell>
                                          </TableRow>
                                      )
                                  )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
