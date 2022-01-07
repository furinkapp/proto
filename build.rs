fn main() -> Result<(), Box<dyn std::error::Error>>   { 
	tonic_build::compile_protos("proto/session.proto")?;
    tonic_build::compile_protos("proto/database.proto")?;
	Ok(())
}
