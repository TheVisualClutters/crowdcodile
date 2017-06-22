/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


/*

This file is part of TVC CrowdCodile.

TVC CrowdCodile is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

TVC CrowdCodile is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with TVC CrowdCodile. If not, see <http://www.gnu.org/licenses/>.
*/

#include "../js/libs/json2.js"
#include "../js/libs/aequery.js"

function sayHello(){
    alert("hello from ExtendScript");
}


// Michael Delaney's fix to strip out circular functions
function (data, out) {
    var e, k, results;
    if (out === null) {
        out = {};
    }
    if (!data) {
        return void 0;
    }
    if (typeof data === 'object') {
        results = [];
        for (k in data) {
            if (k === "theComp" || k === "parentFolder" || k === "source") {
                if (data[k]) {
                    out[k] = data[k].id;
                }
            }
        }
        return results;
    } else {
        return data;
    }
}