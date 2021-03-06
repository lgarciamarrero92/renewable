<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SolarPanel;
use Auth;
class SolarPanelController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'model' => 'required|unique:solar_panels,model,NULL,id,user_id,'.Auth::user()->id,
            'invest_cost' => 'required|numeric|min:1|max:10000',
            'nominal_power' => 'required|numeric|min:1|max:1000000',
            'width' => 'required|numeric|min:0.1|max:10',
            'height' => 'required|numeric|min:0.1|max:10',
            'om_cost_per_year' => 'required|numeric|min:1|max:2000000'
        ]);
        $data['user_id'] = Auth::user()->id;
        $panel = new SolarPanel($data);
        $panel->save();

    }
    public function getAll(Request $request){
        $user_id = Auth::user()->id;
        if($request->has('page')){
            $perPage = $request->has('perPage') ? (int) $request->perPage : 3;
            $items = SolarPanel::where('user_id',$user_id);
            $result = $items->paginate($perPage);
            return response()->json($result);
        }else{
            $items = SolarPanel::where('user_id',$user_id)->get();
            return $items;
        }
    }
    public function get($id){
        return SolarPanel::findOrFail($id);
    }
    public function edit($id, Request $request){
        $data = $this->validate($request, [
            'model' => 'required|unique:solar_panels,model,'.$id.',id,user_id,'.Auth::user()->id,
            'invest_cost' => 'required|numeric|min:1|max:10000',
            'nominal_power' => 'required|numeric|min:1|max:1000000',
            'width' => 'required|numeric|min:0.1|max:10',
            'height' => 'required|numeric|min:0.1|max:10',
            'om_cost_per_year' => 'required|numeric|min:1|max:2000000'
        ]);
        $solar_panel = SolarPanel::findOrFail($id);
        $solar_panel->update($data);
    }
    public function delete($id){
        $solar_panel = SolarPanel::findOrFail($id);
        $solar_panel->delete();
    }
}
