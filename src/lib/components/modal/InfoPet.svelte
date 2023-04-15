<script>
	export let pet;
</script>

<div class="p-4 flex flex-col gap-4 card">
	<h1>{pet.name}</h1>
	<hr />
	<div class="flex flex-col gap-4">
		<div class="card p-4">
			<section class="p-4">
				<h3>ข้อมูลสัตว์เลี้ยง</h3>
				<hr class="my-2" />
				<div class="my-4 flex flex-col gap-y-5">
					<label class="label">
						<span>ชื่อ : </span>
						<input class="input" type="text" value="{pet.name}" disabled>
					</label>
          <label class="label">
						<span>สายพันธ์ุ : </span>
						<input class="input" type="text" value="สายพันธ์ุ" disabled>
					</label>
          <label class="label">
            <span>เพศ : </span>
            <input class="input" type="text" value="" disabled>
          </label>
          <label>
            <span>วันเกิด : </span>
            <input class="input" type="date" value="" disabled>
          </label>
          <label class="label">
            <span>รายละเอียดเพิ่มเติม : </span>
            <textarea class="textarea" rows="4" placeholder="รายละเอียดเพิ่มเกี่ยวกัยสัตว์" />
          </label>
				</div>
			</section>
		</div>
	</div>
</div>
