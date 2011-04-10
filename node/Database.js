/**
 * 2011 Peter 'Pita' Martischka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This Module provides access to the database. It controls the abstractation and perhabs in the future the cache. 
 */

/**
 * The Store we are using. Its provided by the Keys Library. 
 */
exports.store = null;

/**
 * Must be called to initalize the store
 * @param storeType the type of the store we should initalize. Only nstore is implemented yet
 * @param options a options object. For nstore we need a path in a object {path:'/foo'}
 */
exports.init = function(storeType, options) 
{
  if(storeType == "nstore")
  {
    if(!options.path)
    {
      throw "For nstore we need a path in the option object";
    }
  
    var nStore = require('keys').nStore;
    exports.store = new nStore({ path: options.path });
  } 
  //throw exception if storeType is unkown
  else
  {
    throw "Database type '" + storeType + "' unkown";
  }
}

