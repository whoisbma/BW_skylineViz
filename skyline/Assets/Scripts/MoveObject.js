
function Start () {
	Destroy(gameObject, 5);
}

function Update () {

	transform.Translate(Vector3.back * .4, Space.World);

}