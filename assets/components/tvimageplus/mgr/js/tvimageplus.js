/*
 * Copyright 2013 by Alan Pich <alan.pich@gmail.com>
 *
 * This file is part of tvImagePlus
 *
 * tvImagePlus is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 *
 * tvImagePlus is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Vapor; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package tvImagePlus
 * @author Alan Pich <alan.pich@gmail.com>
 * @copyright Alan Pich 2013
 */


var tvImagePlus = function(config) {
    config = config || {};
    tvImagePlus.superclass.constructor.call(this,config);
};
Ext.extend(tvImagePlus,Ext.Component,{
    page:{},window:{},grid:{},tree:{},panel:{},combo:{},config: {},jquery:{}
});
Ext.reg('doodles',tvImagePlus);
tvImagePlus = new tvImagePlus();
